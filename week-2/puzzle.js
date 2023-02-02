image = new SimpleImage("puzzle-gold.png");

for (pixel: image) {
  // your code here
  pixel.setGreen(0);
  pixel.setBlue(0);
  pixel.setRed(pixel.getRed() * 10);

}

print(image);