img = new SimpleImage("yosemite.jpg");
back = new SimpleImage("paris.jpg");
back.setSameSize(image);
img.setZoom(0.5);

for (pixel : img) {
    backPixel = back.getPixel(pixel.getX(), pixel.getY());
    if (pixel.isSimilarTo(63, 121, 248, 70)) {
        pixel.setRGB((backPixel.getRed() + pixel.getRed() / 2),
        (backPixel.getGreen() + pixel.getGreen() / 2),
        (backPixel.getBlue() + pixel.getBlue() / 2));
        }
    }
    
print(back);