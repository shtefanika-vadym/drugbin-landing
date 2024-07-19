export function getStringWidth(text: string, font = "16px Arial") {
  // Create a canvas element
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");

  if (context) {
    // Check if context is not null
    // Set the font for the context
    context.font = font;

    // Measure the text width
    const metrics = context.measureText(text);

    return metrics.width;
  }

  // Handle the case where context is null (though this should not typically happen)
  console.warn("Unable to get 2D context from canvas");
  return 0;
}
