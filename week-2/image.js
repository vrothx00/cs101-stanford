image = new SimpleImage("51020-banana.png");
for (pixel: image) {
  // your code here
  pixel.setRed(pixel.getRed() * 20);
  pixel.setGreen(pixel.getGreen() * 5);
  pixel.setBlue(pixel.getBlue() * 10);

}

print(image);