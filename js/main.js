$( document ).ready(function(){


    $('#ProfiServiceForm').on('show.bs.modal', function (e) {
        $('#profi-service').modal('hide');
    });
    $('#normalServiceForm').on('show.bs.modal', function (e) {
        $('#normal-service').modal('hide');
    });
    $('#startServiceForm').on('show.bs.modal', function (e) {
        $('#start-service').modal('hide');
    });

    $('.our-projects-items li').hover(function() {
            $(this).children('.our-projects-items li h4').show();
            $(this).children('.our-projects .line-projects').show();
            $(this).children('.our-projects-items li p').show();
            $(this).children('.project-btn').show();
        },
        function () {
            $(this).children('.our-projects-items li h4').hide();
            $(this).children('.our-projects .line-projects').hide();
            $(this).children('.our-projects-items li p').hide();
            $(this).children('.project-btn').hide();
        }
    );

    $('.right-section ul li').hover(function() {
            $(this).children('.right-section ul li .project-btn').show();
            $(this).children('.right-section ul li p').show();
        },
        function () {
            $(this).children('.right-section ul li .project-btn').hide();
            $(this).children('.right-section ul li p').hide();
        }
    );

    var display = true;
    $('#projectWatchMoreBtn').on('click', function () {
        if ( display == true ) {
            $( "#projectWatchMore" ).css('display', 'flex');
            $('#projectWatchMoreBtn').text('Скрыть проекты');
            display = false;
        } else if ( display == false ) {
            $( "#projectWatchMore" ).css('display', 'none');
            $('#projectWatchMoreBtn').text('Смотреть ещё');
            display = true;
        }
    });

    $(".our-projects-items li button").on('click', function(){
        $(this).parent().find('a:eq(0)').trigger('click');
    });

    $(".right-section ul li .project-btn").on('click', function(){
        $(this).parent().find('a:eq(0)').trigger('click');
    });

    $('.navbar-items a').on('click', function(e){
        e.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr('href')).offset().top-5 }, 1000);
    });

    $('.left-section a').on('click', function(e){
        e.preventDefault();
        $("html, body").animate({ scrollTop: $($(this).attr('href')).offset().top }, 1000);
    });


    $( '[data-fancybox]' ).fancybox({
        lang : 'ru',
        i18n : {
            'ru' : {
                CLOSE: "Закрыть",
                NEXT: "Следующая",
                PREV: "Предыдущая",
                ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                PLAY_START: "Запустить слайд",
                PLAY_STOP: "Pause slideshow",
                FULL_SCREEN: "Открыть на весь экран",
                THUMBS: "Превью",
                DOWNLOAD: "Download",
                SHARE: "Share",
                ZOOM: "Увеличить"
            }
        }
    });

    $('#sendMessage').on('click', function(e){
        e.preventDefault();

        var name = $('input[name="name"]').val();
        var phone = $('input[name="phone"]').val();
        var email = $('input[name="email"]').val();

        var error = 0;

        if(!name){
            $('input[name="name"]').addClass('error');
            error++;
        }
        if(!phone){
            $('input[name="phone"]').addClass('error');
            error++;
        }
        if(!email){
            $('input[name="email"]').addClass('error');
            error++;
        }
        if(error){
            return false;
        }

        $.ajax({
            url : "send.php",
            dataType : "json",
            type : "post",
            data : {name : name, phone: phone, email: email}
        }).done(function( data ) {
            $('#form-sendMessage').html('<h3>'+data.msg+'</h3>');
        });
    });

    $('#start-btn').on('click', function(e){
        e.preventDefault();

        var tarif = $(this).parent().parent().find('.modal-title').text();
        var nameStart = $('input[name="nameStart"]').val();
        var phoneStart = $('input[name="phoneStart"]').val();
        var emailStart = $('input[name="emailStart"]').val();
        var startMessage = $('textarea[name="startMessage"]').val();

        var error = 0;

        if(!nameStart){
            $('input[name="nameStart"]').addClass('error');
            error++;
        }
        if(!phoneStart){
            $('input[name="phoneStart"]').addClass('error');
            error++;
        }
        if(!emailStart){
            $('input[name="emailStart"]').addClass('error');
            error++;
        }
        if(error){
            return false;
        }

        $.ajax({
            url : "send.php",
            dataType : "json",
            type : "post",
            data : {nameStart : nameStart, phoneStart: phoneStart, emailStart: emailStart, startMessage: startMessage, tarif: tarif}
        }).done(function( data ) {
            $('#start-btn').hide();
            $('#form-start').html('<h3>'+data.msg+'</h3>');
        });
    });

    $('#normal-btn').on('click', function(e){
        e.preventDefault();

        var tarif = $(this).parent().parent().find('.modal-title').text();
        var nameNormal = $('input[name="nameNormal"]').val();
        var phoneNormal = $('input[name="phoneNormal"]').val();
        var emailNormal = $('input[name="emailNormal"]').val();
        var normalMessage = $('textarea[name="normalMessage"]').val();

        var error = 0;

        if(!nameNormal){
            $('input[name="nameNormal"]').addClass('error');
            error++;
        }
        if(!phoneNormal){
            $('input[name="phoneNormal"]').addClass('error');
            error++;
        }
        if(!emailNormal){
            $('input[name="emailNormal"]').addClass('error');
            error++;
        }
        if(error){
            return false;
        }

        $.ajax({
            url : "send.php",
            dataType : "json",
            type : "post",
            data : {nameNormal : nameNormal, phoneNormal: phoneNormal, emailNormal: emailNormal, normalMessage: normalMessage, tarif: tarif}
        }).done(function( data ) {
            $('#normal-btn').hide();
            $('#form-normal').html('<h3>'+data.msg+'</h3>');
        });
    });

    $('#profi-btn').on('click', function(e){
        e.preventDefault();

        var tarif = $(this).parent().parent().find('.modal-title').text();
        var nameProfi = $('input[name="nameProfi"]').val();
        var phoneProfi = $('input[name="phoneProfi"]').val();
        var emailProfi = $('input[name="emailProfi"]').val();
        var profiMessage = $('textarea[name="profiMessage"]').val();

        var error = 0;

        if(!nameProfi){
            $('input[name="nameProfi"]').addClass('error');
            error++;
        }
        if(!phoneProfi){
            $('input[name="phoneProfi"]').addClass('error');
            error++;
        }
        if(!emailProfi){
            $('input[name="emailProfi"]').addClass('error');
            error++;
        }
        if(error){
            return false;
        }

        $.ajax({
            url : "send.php",
            dataType : "json",
            type : "post",
            data : {nameProfi : nameProfi, phoneProfi: phoneProfi, emailProfi: emailProfi, profiMessage: profiMessage, tarif: tarif}
        }).done(function( data ) {
            $('#profi-btn').hide();
            $('#form-profi').html('<h3>'+data.msg+'</h3>');
        });
    });

    function windowSize(){
        if ($(window).width() <= '1100' && $(window).width() >= '530'){
            $('.our-projects-items li:last-child').hide();
        } else {
            $('.our-projects-items li:last-child').show();
        }
    }
    $(window).on('load resize',windowSize);

    function headerSize(){
        if ($(window).width() <= '530'){
            $('.main.header .navbar-items').hide();
        } else {
            $('.main.header .navbar-items').show();
        }
    }
    $(window).on('load resize',headerSize);

    $( ".cross" ).hide();
    $( ".hamburger" ).click(function() {
        $( "header .main-navbar .navbar-items" ).slideToggle( "slow", function() {
            $( ".hamburger" ).hide();
            $( ".cross" ).show();
        });
    });

    $( ".cross" ).click(function() {
        $( "header .main-navbar .navbar-items" ).slideToggle( "slow", function() {
            $( ".cross" ).hide();
            $( ".hamburger" ).show();
        });
    });

});