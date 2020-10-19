

function setup() {
    createCanvas(1000, 1000);
    stroke(255);
    frameRate(30);
}

function draw() {
    background('rgb(255,255,255)');
    noStroke();
    //eyebrow left offset
    let ebl = (mouseX-width/2)/width*15;
    //eyebrow right offset
    let ebr = (width/2-mouseX)/width*15;
    //make back hair
    fill('rgb(74,43,5)');
    beginShape();
    vertex(640 ,426);
    vertex(638,507);
    vertex(631,538);
    vertex(635,562);
    vertex(685,583);
    vertex(718,622);
    vertex(667,596);
    vertex(718,664);
    vertex(718,712);
    vertex(660,745);
    vertex(601,732);
    vertex(578,697);
    vertex(413,719);
    vertex(407,788);
    vertex(373,796);
    vertex(284,764);
    vertex(264,672);
    vertex(294,623);
    vertex(277,605);
    vertex(315,600);
    vertex(333,568);
    vertex(318,499);
    vertex(315,453);
    vertex(324,420);
    endShape(CLOSE);

    //make eyes
    drawEye(417, 443, 70);
    drawEye(553, 440, 70);
    fill('rgb(240, 222, 204)');

    //make face shape
    beginShape();
    vertex(373, 606);
    vertex(363, 530);
    vertex(335, 484);
    vertex(340, 453);
    vertex(354, 464);
    vertex(341, 363);
    vertex(364, 297);
    vertex(410, 247);
    vertex(547, 248);
    vertex(597, 288);
    vertex(626, 340);
    vertex(629, 455);
    vertex(634, 449);
    vertex(635, 488);
    vertex(617, 544);
    vertex(613, 595);
    vertex(522, 696);
    vertex(461, 699);
    //make eye sockets
    beginContour();
    vertex(405, 454);
    vertex(432, 451);
    vertex(451, 448);
    vertex(428, 432);
    vertex(398, 433);
    vertex(385, 449);
    endContour();
    beginContour();
    vertex(521, 445);
    vertex(545, 450);
    vertex(568, 450);
    vertex(581, 441);
    vertex(565, 430);
    vertex(544, 429);
    endContour();
    endShape(CLOSE);
    fill('rgb(99,58,7)');

    //make beard
    beginShape();
    vertex(629, 450);
    vertex(615, 622);
    vertex(563, 727);
    vertex(491, 752);
    vertex(419, 732);
    vertex(360, 612);
    vertex(352, 450);
    vertex(375, 601);
    vertex(460, 669);
    vertex(450, 610);
    vertex(488, 620);
    vertex(530, 607);
    vertex(524, 665);
    vertex(606, 588);
    endShape(CLOSE);

    //make moustache
    beginShape();
    vertex(487, 568);
    vertex(467, 580);
    vertex(417, 601);
    vertex(406, 583);
    vertex(438, 553);
    vertex(469, 546);
    vertex(488, 553);
    vertex(503, 543);
    vertex(524, 543);
    vertex(578, 581);
    vertex(566, 596);
    vertex(507, 578);
    endShape(CLOSE);

    //make eyebrow;
    beginShape();
    vertex(357,426);
    vertex(364,402+ebl);
    vertex(391,391+ebl);
    vertex(441,393+ebl);
    vertex(479,403);
    vertex(511,394+ebr);
    vertex(532+389+ebr);
    vertex(575,385+ebr);
    vertex(594,389+ebr);
    vertex(612,405+ebr);
    vertex(616,420);
    vertex(584,405+ebr);
    vertex(545,408+ebr);
    vertex(514,410+ebr);
    vertex(484,415);
    vertex(439,410+ebl);
    vertex(391,406+ebl);
    vertex(368,414+ebl);
    endShape(CLOSE);


    //make front hair
    fill('rgb(74,43,5)');
    beginShape();
    vertex(352,450);
    vertex(324,420);
    vertex(317,366);
    vertex(331,305);
    vertex(391,233);
    vertex(428,210);
    vertex(466,216);
    vertex(515,205);
    vertex(573,231);
    vertex(607,269);
    vertex(641,339);
    vertex(650,393);
    vertex(641,423);
    vertex(629,450);
    vertex(622,378);
    vertex(622,332);
    vertex(592,290);
    vertex(525,258);
    vertex(427,262);
    vertex(375,297);
    vertex(351,344);
    vertex(349,409);
    endShape(CLOSE);
}

//eyes
function drawEye(x, y, size) {
    //white area
    fill('rgb(235, 230, 230)');
    circle(x, y, size);
    fill('rgb(130,120,145)');
    // used foor look angle
    let xPos = 0;
    let yPos = 0;
    // offset for distance from center of eye
    let xOff = 0;
    let yOff = 0;
    // calculates distance of iris from eye center
    xOff = (mouseX - x) / (windowWidth - x);
    yOff = (mouseY - y) / (windowHeight - y);
    // gets the look angle of eye
    let angle = Math.atan((mouseX - x) / (mouseY - y));
    //if mouse is left of eye
    if (mouseX < x) {
        
        if (mouseY > y) {
            // if mouse is below eye
            xPos = x + size / 3 * (Math.sin(angle) * -xOff);
            yPos = y + size / 3 * (Math.cos(angle) * yOff / 2);
        }
        else {
            // if mouse is above eye
            xPos = x - size / 3 * (Math.sin(angle) * -xOff);
            yPos = y - size / 3 * (Math.cos(angle) * -yOff / 2);
        }
    }
    // if mouse is right of eye
    else {
        // if mouse is below eye
        if (mouseY >= y) {
            xPos = x + size / 3 * (Math.sin(angle) * xOff);
            yPos = y + size / 3 * (Math.cos(angle) * yOff / 2);
        }
        // if mouse is above eye
        else {
            xPos = x - size / 3 * (Math.sin(angle) * xOff);
            yPos = y - size / 3 * (Math.cos(angle) * -yOff / 2);
        }
    }
    // iris
    circle(xPos, yPos, size / 2.5);
    // pupil
    fill(30);
    circle(xPos, yPos, size / 5);
}