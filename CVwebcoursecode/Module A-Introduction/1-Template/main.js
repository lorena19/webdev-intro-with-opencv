function openCvReady () {
    cv["onRuntimeInitialized"] = () => {

        console.log("OpenCV Ready");
        // read an image from the image source and convert to opencv format
        let imgMain = cv.imread("img-main"); //image in opencv mat format
        cv.imshow("main-canvas", imgMain);
        imgMain.delete(); //to free the memory allocated 
    };
}