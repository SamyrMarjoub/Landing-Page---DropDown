const features = document.querySelector('.features')
const Company = document.querySelector('.Company')
let cont = 101

const feature_js = document.querySelector('.features_js').addEventListener('click', function () {
  ++cont
    $('.Company').hide('fast')
    if (cont % 2 == 0) {
        $('.features').show('fast')

    } else {
        $('.features').hide('fast')
    }

})
$('.company_js').click(function () {
    ++cont
    $('.features').hide('fast')
    if (cont % 2 == 0) {
        $('.Company').show('fast')

    } else {
        $('.Company').hide('fast')
    }
    console.log(cont)
})