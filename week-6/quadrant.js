img = new SimpleImage("poppy.jpg");
img.setZoom(0.5);
// write your answer below

for (pixel: img) {
    if (pixel.getX() > img.getWidth() / 2 && pixel.getY() > img.getHeight()
    / 2) {
    pixel.setRGB (255 - pixel.getRed(), 255 - pixel.getGreen(), 255 -
    pixel.getBlue());
    }
}