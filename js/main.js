var app = {
    initialize: function() {
        var self = this;
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

    
    slidePage: function(page) {
 
        var currentPageDest,
            self = this;
     
        // If there is no current page (app just started) -> No transition: Position new page in the view port
        if (!this.currentPage) {
            $(page.el).attr('class', 'page stage-center');
            $('body').html(page.el);
            this.currentPage = page;
            return;
        }
     
        // Cleaning up: remove old pages that were moved out of the viewport
        $('.stage-right, .stage-left').not('.homePage').remove();
     
        if (page === app.homePage) {
            // Always apply a Back transition (slide from left) when we go back to the search page
            $(page.el).attr('class', 'page stage-left');
            currentPageDest = "stage-right";
        } else {
            // Forward transition (slide from right)
            $(page.el).attr('class', 'page stage-right');
            currentPageDest = "stage-left";
        }
     
        $('body').html(page.el);
     
        // Wait until the new page has been added to the DOM...
        setTimeout(function() {
            // Slide out the current page: If new page slides from the right -> slide current page to the left, and vice versa
            $(self.currentPage.el).attr('class', 'page transition ' + currentPageDest);
            // Slide in the new page
            $(page.el).attr('class', 'page stage-center transition');
            self.currentPage = page;
        });
     
    },
    route: function(page) {
        var self = this;
        var hash = window.location.hash;


        // version avec slider
        if (!hash) {
            this.homePage = new HomeView(this.store).render();
            this.slidePage(this.homePage);
            // $('body').html( new HomeView(this.store).render().el);
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
            else
            {
                this.homePage = new HomeView(this.store).render();
                this.slidePage(this.homePage);
                // $('body').html(new HomeView(this.store).render().el);
                $('.bloc').biseau({tl:0,tr:0,br:40,bl:0});
            }
        }
    },
};

app.initialize();