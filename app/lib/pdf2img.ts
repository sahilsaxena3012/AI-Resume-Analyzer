export interface PdfConversionResult {
  imageUrl: string;
  file: File | null;
  error?: string;
}

export async function convertPdfToImage(
  file: File,
): Promise<PdfConversionResult> {
  try {
    if (typeof window === "undefined") {
      return {
        imageUrl: "",
        file: null,
        error: "Must run in browser",
      };
    }

    // ✅ Dynamic imports (FIXES SSR crash)
    const pdfjsLib = await import("pdfjs-dist");
    const worker = await import("pdfjs-dist/build/pdf.worker?url");

    pdfjsLib.GlobalWorkerOptions.workerSrc = worker.default;

    const arrayBuffer = await file.arrayBuffer();
    const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
    const page = await pdf.getPage(1);

    const viewport = page.getViewport({ scale: 3 });

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    canvas.width = viewport.width;
    canvas.height = viewport.height;

    await page.render({
      canvasContext: context!,
      canvas: canvas,
      viewport,
    }).promise;

    const blob = await new Promise<Blob | null>((resolve) =>
      canvas.toBlob(resolve, "image/png"),
    );

    if (!blob) {
      throw new Error("Blob creation failed");
    }

    return {
      imageUrl: URL.createObjectURL(blob),
      file: new File([blob], "resume.png", { type: "image/png" }),
    };
  } catch (err) {
    console.error("PDF ERROR:", err);
    return {
      imageUrl: "",
      file: null,
      error: String(err),
    };
  }
}
