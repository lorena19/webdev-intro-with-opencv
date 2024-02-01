function openCvReady () {
    cv["onRuntimeInitialized"] = () => {

        console.log("OpenCV Ready");
        // read an image from the image source and convert to opencv format
        let imgMain = cv.imread("img-main"); //image in opencv mat format
        let imgGray = imgMain.clone();
        let imgBlur = imgMain.clone();
        let imgCanny = imgMain.clone();

        //converting image to grayscale
        cv.cvtColor(imgMain,imgGray, cv.COLOR_RGBA2GRAY,0);
        //Adding Blur
        let ksize = new cv.Size(49, 49);
        cv.GaussianBlur(imgMain, imgBlur, ksize, 0);

        //find Edges using canny edge detector
        cv.Canny(imgMain, imgCanny, 50, 100);


        cv.imshow("main-canvas", imgBlur);
        imgMain.delete(); //to free the memory allocated 
        imgGray.delete();
        imgBlur.delete();
        imgCanny.delete(); 
    };
}