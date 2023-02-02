image = new SimpleImage("x.png");
image.setZoom(20);

// Set pixel (0, 0) to be green.	
pixel = image.getPixel(0, 0);
pixel.setRed(255);

// Set pixel (0, 0) to be a light, pastel red.
// pixel.setRed(255);
// pixel.setGreen(200);
// pixel.setBlue(200);

// Set pixel (0, 0) to white.	
// pixel.setRed(255);
// pixel.setGreen(255);
// pixel.setBlue(255);

print(image);