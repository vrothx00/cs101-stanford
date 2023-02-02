// Grayscale Conversion
image = new SimpleImage("flowers.jpg");
for (pixel: image) {
  // your code here
  avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
  pixel.setRed(avg);
  pixel.setGreen(avg);
  pixel.setBlue(avg);
}
print(image);