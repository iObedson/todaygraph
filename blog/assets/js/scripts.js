$(document).ready(function () {
    $(".menu-toggle").on("click", function () {
        $(".nav").toggleClass("showing");
        $(".nav ul").toggleClass("showing");
    });

    $(".post-wrapper").slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: $(".next"),
        prevArrow: $(".prev"),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});

CKEDITOR.replace('body', {
    extraPlugins: 'embed,autoembed,image2',
    height: 300, 

    // Load the default contents.css file plus customizations for this sample.
    contentsCss: [
      'http://cdn.ckeditor.com/4.16.2/full-all/contents.css',
      'https://ckeditor.com/docs/ckeditor4/4.16.2/examples/assets/css/widgetstyles.css'
    ],
    // Setup content provider. See https://ckeditor.com/docs/ckeditor4/latest/features/media_embed
    embed_provider: '//ckeditor.iframe.ly/api/oembed?url={url}&callback={callback}',

    // Configure the Enhanced Image plugin to use classes instead of styles and to disable the
    // resizer (because image size is controlled by widget styles or the image takes maximum
    // 100% of the editor width).
    image2_alignClasses: ['image-align-left', 'image-align-center', 'image-align-right'],
    image2_disableResizer: true,
    removeButtons: 'PasteFromWord'
  });

  /*
    CKEDITOR.replace('editor2', {
      extraPlugins: 'autoembed,embedsemantic,image2,mathjax,codesnippet,font',
      removeButtons: 'Font, PasteFromWord',
      height: 300,
      mathJaxLib: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-AMS_HTML'
    });
  </script>
   */