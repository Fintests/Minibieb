var app = {
    initialize: function() {
        var self = this;
        this.detailsURL = /#([^&]+)(&|$)/;
        this.registerEvents();
        self.route();

    },

    registerEvents: function() {
        // Super important pour fluidité de l'application
        $(window).on('hashchange', $.proxy(this.route, this));
        $('body').on('mousedown', 'a', function(event) {
            $(event.target).addClass('tappable-active');
        });
        $('body').on('mouseup', 'a', function(event) {
            $(event.target).removeClass('tappable-active');
        });
    },

    showAlert: function (message, title) {
        if (navigator.notification) {
            navigator.notification.alert(message, null, title, 'OK');
        } else {
            alert(title ? (title + ": " + message) : message);
        }
    },

    
    slidePage: function(page, callback) {
 
        var currentPageDest,
            self = this;
     
        // If there is no current page (app just started) -> No transition: Position new page in the view port
        if (!this.currentPage) {
            $(page.el).attr('class', 'page stage-center ui-responsive-panel ui-page ui-body-c ui-page-panel ui-page-header-fixed ui-page-footer-fixed ui-page-active');
			$(page.el).attr('data-role','page');
			$(page.el).attr('data-url','panel-fixed-page1');
            $('body').html(page.el);
            this.currentPage = page;
            return;
        }
     
        // Cleaning up: remove old pages that were moved out of the viewport
        $('.stage-right, .stage-left').not('.homePage').remove();
     
        if (page === app.homePage) {
            // Always apply a Back transition (slide from left) when we go back to the search page
            $(page.el).attr('class', 'page stage-left ui-responsive-panel ui-page ui-body-c ui-page-panel ui-page-header-fixed ui-page-footer-fixed ui-page-active');
			$(page.el).attr('data-role','page');
			$(page.el).attr('data-url','panel-fixed-page1');
            currentPageDest = "stage-right";
        } else {
            // Forward transition (slide from right)
            $(page.el).attr('class', 'page stage-right ui-responsive-panel ui-page ui-body-c ui-page-panel ui-page-header-fixed ui-page-footer-fixed ui-page-active');
			$(page.el).attr('data-role','page');
			$(page.el).attr('data-url','panel-fixed-page1');
            currentPageDest = "stage-left";
        }
     
        $('body').html(page.el);

        if(callback)
        {
            callback();
        }
     
        // Wait until the new page has been added to the DOM...
        setTimeout(function() {
            // Slide out the current page: If new page slides from the right -> slide current page to the left, and vice versa
            $(self.currentPage.el).attr('class', 'page transition ui-responsive-panel ui-page ui-body-c ui-page-panel ui-page-header-fixed ui-page-footer-fixed ui-page-active ' + currentPageDest);
			$(self.currentPage.el).attr('data-role','page');
			$(self.currentPage.el).attr('data-url','panel-fixed-page1');
            // Slide in the new page
            $(page.el).attr('class', 'page stage-center transition ui-responsive-panel ui-page ui-body-c ui-page-panel ui-page-header-fixed ui-page-footer-fixed ui-page-active');
			$(page.el).attr('data-role','page');
			$(page.el).attr('data-url','panel-fixed-page1');
            self.currentPage = page;
        });
     
    },
    route: function(page) {
        var self = this;
        var hash = window.location.hash;


        // version avec slider
        if (!hash) {
            this.homePage = new HomeView().render();
            this.slidePage(this.homePage);
            // $('body').html( new HomeView().render().el);
            $('.bloc').biseau({tl:0,tr:0,br:50,bl:0});
            return;
        }
        else
        {
            if(hash=="#contexte")
            {
                this.homePage = new ContexteView().render();
                this.slidePage(this.homePage);
                // $('body').html( new ContexteView().render().el);
                $('.li-contexte').addClass('active');
            }
            else if(hash=="#localisation")
            {
                this.homePage = new LocalisationView(locations).render();

                //  console.log($('#map_canvas'));
                this.slidePage(this.homePage, function() {
                    if(google.maps) {
                        self.map = map.initialize('map_canvas', locations);
                    }
                });

                $('.li-localisation').addClass('active');

                $('.buttonOpen').click(function() {
                    $(this).css('display','none');
                    $('.buttonClose').css({'display':'block','top':'142px'});
                    $('.mapInfo').css({'right':'0','top':'0'});
                });
                
                $('.buttonClose').click(function() {
                    $(this).css('display','none');
                    $('.buttonOpen').css({'display':'block','top':'102px'});
                    $('.mapInfo').css({'right':'-277px','top':'40px'});
                });
            }
            else if(hash=="#immeuble")
            {
                this.homePage = new ImmeubleView().render();
                this.slidePage(this.homePage);
                // $('body').html(new ImmeubleView().render().el);
                $('.li-immeuble').addClass('active');
            }
            else if(hash=="#visite")
            {
                this.homePage = new VisiteView().render();
                this.slidePage(this.homePage);
                // $('body').html(new VisiteView().render().el);
                $('.li-visite').addClass('active');
            }
            else if(hash=="#galleryExt")
            {
                this.homePage = new GalleryExtView().render();
                this.slidePage(this.homePage);
                // $('body').html(new GalleryExtView().render().el);
                $('.li-visite').addClass('active');
            }
            else if(hash=="#galleryInt1")
            {
                this.homePage = new GalleryInt1View().render();
                this.slidePage(this.homePage);
                // $('body').html(new GalleryInt1View().render().el);
                $('.li-visite').addClass('active');
                $('.bloc').biseau({tl:0,tr:0,br:40,bl:0});
            }
            else if(hash=="#galleryInt2")
            {
                this.homePage = new GalleryInt2View().render();
                this.slidePage(this.homePage);
                // $('body').html(new GalleryInt2View().render().el);
                $('.li-visite').addClass('active');
                $('.bloc').biseau({tl:0,tr:0,br:40,bl:0});
            }
            else if(hash=="#contact")
            {
                this.homePage = new ContactView().render();
                this.slidePage(this.homePage);
                // $('body').html(new ContactView().render().el);
                $('.li-contact').addClass('active');
            }
            // else if(hash=="#allianz")
            // {
            //     navigator.app.loadUrl('https://m.allianz.fr/accueil/index.html', { openExternal:true } ); 
            // }
            else
            {
                this.homePage = new HomeView().render();
                this.slidePage(this.homePage);
                // $('body').html(new HomeView().render().el);
                $('.bloc').biseau({tl:0,tr:0,br:40,bl:0});
            }
        }
    },
};

app.initialize();