image = new SimpleImage("monkey.jpg");
back = new SimpleImage("moon.jpg");

for (pixel: image) {
  avg = (pixel.getRed() + pixel.getGreen() + pixel.getBlue())/3;
  // your code here
  if (pixel.getBlue() > avg * 0.92) {
    pixel2 = back.getPixel(pixel.getX(), pixel.getY());
    pixel.setRed(pixel2.getRed());
    pixel.setGreen(pixel2.getGreen());
    pixel.setBlue(pixel2.getBlue());
  }
}

print(image);