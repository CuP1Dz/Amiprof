let sliderReviewsIndex = 1
const sliderReviews = document.querySelectorAll('.reviewsContentSliderRowImgDiv')

function showNextSlideReviews(){
    if(sliderReviewsIndex < sliderReviews.length - 2){
        sliderReviewsIndex = sliderReviewsIndex +1
        updateSliderReviews()
    }
}

function showPreviousSlideReviews(){
    if(sliderReviewsIndex >1){
        sliderReviewsIndex = sliderReviewsIndex - 1
        updateSliderReviews()
    }
}

function updateSliderReviews(){
    for(let i = 0; i < sliderReviews.length; i++){
        sliderReviews[i].classList.add('hidden')
    }
    for(let i = 0; i < sliderReviews.length; i++){
        if(i == sliderReviewsIndex-1 || i ==sliderReviewsIndex || i == sliderReviewsIndex + 1){
            sliderReviews[i].classList.remove('hidden')
        }
    }
}

let sliderCertificateIndex = 1
const sliderCertificate = document.querySelectorAll('.certificateContentSliderRowImgDiv')

function showNextSlideCertificates(){
    if(sliderCertificateIndex < sliderCertificate.length - 2){
        sliderCertificateIndex = sliderCertificateIndex +1
        updateSliderCertificate()
    }
}

function showPreviousSlideCertificate(){
    if(sliderCertificateIndex >1){
        sliderCertificateIndex = sliderCertificateIndex - 1
        updateSliderCertificate()
    }
}

function updateSliderCertificate(){
    for(let i = 0; i < sliderCertificate.length; i++){
        sliderCertificate[i].classList.add('hidden')
    }
    for(let i = 0; i < sliderCertificate.length; i++){
        if(i == sliderCertificateIndex-1 || i ==sliderCertificateIndex || i == sliderCertificateIndex + 1){
            sliderCertificate[i].classList.remove('hidden')
        }
    }
}