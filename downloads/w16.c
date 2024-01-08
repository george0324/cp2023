#include <gd.h>
#include <stdio.h>

#define WIDTH 800
#define HEIGHT 600
#define SCALE 100

void drawResistor(gdImagePtr im, int x1, int y, int width, int height)
{
    int startX = x1;

    for (int i = 0; i < 6; ++i) {
        gdImageLine(im, startX, y, startX + width / 4, y, gdImageColorAllocate(im, 0, 0, 255));
        gdImageLine(im, startX + width / 4, y, startX + width / 4 + height / 2, y - height / 2, gdImageColorAllocate(im, 0, 0, 255));
        gdImageLine(im, startX + width / 4 + height / 2, y - height / 2, startX + width / 4 + height / 2 + height, y + height / 2, gdImageColorAllocate(im, 0, 0, 255));
        startX += height;
    }

    gdImageLine(im, startX, y + height / 2, startX + height / 2, y, gdImageColorAllocate(im, 0, 0, 255));
    gdImageLine(im, startX + height / 2, y, startX + height / 2 + 5, y, gdImageColorAllocate(im, 0, 0, 255));
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

    outputFile = fopen("./../images/w16.png", "wb");
    if (outputFile == NULL)
    {
        fprintf(stderr, "Error opening the output file.\n");
        return 1;
    }

    gdImageFilledRectangle(im, 0, 0, WIDTH - 1, HEIGHT - 1, gdImageColorAllocate(im, 255, 255, 255));

    gdImageLine(im, SCALE, SCALE, SCALE, HEIGHT - SCALE, gdImageColorAllocate(im, 0, 0, 0));
    gdImageLine(im, WIDTH - SCALE, SCALE, WIDTH - SCALE, HEIGHT - SCALE, gdImageColorAllocate(im, 0, 0, 0));

    drawResistor(im, WIDTH / 3 + SCALE / 2, HEIGHT / 2, SCALE / 2, SCALE / 4);

    gdImageFilledRectangle(im, WIDTH / 3 - SCALE / 2, HEIGHT / 2 - SCALE / 2, WIDTH / 3 + SCALE / 2, HEIGHT / 2 + SCALE / 2, gdImageColorAllocate(im, 255, 0, 0));
    gdImageFilledRectangle(im, WIDTH * 2 / 3 - SCALE / 2, HEIGHT / 2 - SCALE / 2, WIDTH * 2 / 3 + SCALE / 2, HEIGHT / 2 + SCALE / 2, gdImageColorAllocate(im, 255, 0, 0));

    gdImageFilledRectangle(im, 100, HEIGHT + 300, 700, HEIGHT / 2 + 49, gdImageColorAllocate(im, 0, 0, 0));

    gdImagePng(im, outputFile);
    fclose(outputFile);
    gdImageDestroy(im);

    return 0;
}