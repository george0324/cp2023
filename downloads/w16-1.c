#include <gd.h>
#include <stdio.h>
// #include <math.h>

#define WIDTH 800
#define HEIGHT 600
#define SCALE 100

void zigzag(gdImagePtr im, int startX, int startY, int dx, int dy, int count) {
    // draw the first horizontal line
    gdImageLine(im, startX, startY, (startX + dx), startY, gdImageColorAllocate(im, 0, 0, 255));

    // first starting point
    int curX = startX + dx;
    int curY = startY;
    
    // start drawing the zigzag
    int c = -1; // y-axis direction
    for (int i = 0; i < count; i++) {
        int desX = curX + 2*dx;
        int desY = curY + 2*dy*c;
        if (i == 0 || i == count-1) {
            desX -= dx;
            desY += dy;
        }
        gdImageLine(im, curX, curY, desX, desY, gdImageColorAllocate(im, 0, 0, 255));
        curX = desX;
        curY = desY;
        c *= -1;
    }

    // draw the last horizontal line
    gdImageLine(im, curX, curY, curX + dx, curY, gdImageColorAllocate(im, 0, 0, 255));

    return;
}

void drawResistor(gdImagePtr im, int x1, int y, int width, int height)
{
    // set delta x and delta y
    int dx = width / 4;
    int dy = height / 2;

    // middle part
    zigzag(im, x1, y, dx, dy, 7);

    // first part
    zigzag(im, 100, y, dx, dy, 5);
    
    // last part
    zigzag(im, 585, y, dx, dy, 5);
}

int main()
{
    gdImagePtr im;
    FILE *outputFile;

    im = gdImageCreateTrueColor(WIDTH, HEIGHT);
    if (im == NULL)
    {
        fprintf(stderr, "Error creating GD image.\n");
        return 1;
    }

    outputFile = fopen("./test.png", "wb");
    if (outputFile == NULL)
    {
        fprintf(stderr, "Error opening the output file.\n");
        return 1;
    }

    int black, white, red, blue, green;

    black = gdImageColorAllocate(im, 0, 0, 0);
    white = gdImageColorAllocate(im, 255, 255, 255);
    red = gdImageColorAllocate(im, 255, 0, 0);
    blue = gdImageColorAllocate(im, 0, 0, 255);
    green = gdImageColorAllocate(im, 0, 255, 0);
    gdImageFilledRectangle(im, 0, 0, WIDTH - 1, HEIGHT - 1, white);

    gdImageLine(im, SCALE, SCALE, SCALE, HEIGHT - SCALE, black);
    gdImageLine(im, WIDTH - SCALE, SCALE, WIDTH - SCALE, HEIGHT - SCALE, black);

    drawResistor(im, WIDTH / 3 + SCALE / 2, HEIGHT / 2, SCALE / 2, SCALE / 4);

    gdImageFilledRectangle(im, WIDTH / 3 - SCALE / 2, HEIGHT / 2 - SCALE / 2, WIDTH / 3 + SCALE / 2, HEIGHT / 2 + SCALE / 2, red);
    gdImageFilledRectangle(im, WIDTH * 2 / 3 - SCALE / 2, HEIGHT / 2 - SCALE / 2, WIDTH * 2 / 3 + SCALE / 2, HEIGHT / 2 + SCALE / 2, red);

    gdImageFilledRectangle(im, 100, HEIGHT + 300, 700, HEIGHT / 2 + 49, black);

    gdImagePng(im, outputFile);
    fclose(outputFile);
    gdImageDestroy(im);

    return 0;
}