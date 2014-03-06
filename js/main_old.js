var app = {
    initialize: function() {
        var self = this;
        // self.route();
        this.detailsURL = /#([^&]+)(&|$)/;

        this.store = new MemoryStore(function() {
            $('body').html(new HomeView(self.store).render().el);
        });

    },
    showAlert: function (message, title) {
        if (navigator.notification) {
            navigator.notification.alert(message, null, title, 'OK');
        } else {
            alert(title ? (title + ": " + message) : message);
        }
    },

    
    // slidePage: function(page) {
 
    //     var currentPageDest,
    //         self = this;
     
    //     // If there is no current page (app just started) -> No transition: Position new page in the view port
    //     if (!this.currentPage) {
    //         $(page.el).attr('class', 'page stage-center');
    //         $('body').html(page.el);
    //         this.currentPage = page;
    //         return;
    //     }
     
    //     // Cleaning up: remove old pages that were moved out of the viewport
    //     $('.stage-right, .stage-left').not('.homePage').remove();
     
    //     if (page === app.homePage) {
    //         // Always apply a Back transition (slide from left) when we go back to the search page
    //         $(page.el).attr('class', 'page stage-left');
    //         currentPageDest = "stage-right";
    //     } else {
    //         // Forward transition (slide from right)
    //         $(page.el).attr('class', 'page stage-right');
    //         currentPageDest = "stage-left";
    //     }
     
    //     $('body').html(page.el);
     
    //     // Wait until the new page has been added to the DOM...
    //     setTimeout(function() {
    //         // Slide out the current page: If new page slides from the right -> slide current page to the left, and vice versa
    //         $(self.currentPage.el).attr('class', 'page transition ' + currentPageDest);
    //         // Slide in the new page
    //         $(page.el).attr('class', 'page stage-center transition');
    //         self.currentPage = page;
    //     });
     
    // },
    route: function() {
    	console.log('hello');
        // version avec slider
        var self = this;
        var hash = window.location.hash;
        console.log(hash);
        $('body').html(new ContexteView().render());
        // if (!hash) {
        //     if (this.homePage) {
        //         this.slidePage(this.homePage);
        //     } else {
                // if(hash=="#contexte")
                // {
                //     console.log('je suis dans contexte');
                //     this.homePage = new ContexteView().render();
                //     //this.slidePage(this.homePage);
                //     $('body').html(new ContexteView().render());
                // }
                // if(hash=="#localisation")
                // {
                //     this.homePage = new LocalisationView().render();
                //     //this.slidePage(this.homePage);
                //     $('body').html(new LocalisationView().render());
                // }
                // if(hash=="#immeuble")
                // {
                //     this.homePage = new ImmeubleView().render();
                //     //this.slidePage(this.homePage);
                //     $('body').html(new ImmeubleView().render());
                // }
                // if(hash=="#visite")
                // {
                //     this.homePage = new VisiteView().render();
                //     //this.slidePage(this.homePage);
                //     $('body').html(new VisiteView().render());
                // }
                // if(hash=="#contact")
                // {
                //     this.homePage = new ContactView().render();
                //     //this.slidePage(this.homePage);
                //     $('body').html(new ContactView().render());
                // }
                
        //     }
            return;
        // }
        // var match = hash.match(this.detailsURL);
        // console.log(match[1]+" est mon résultat");
        // if (match) {
        //     this.store.findById(Number(match[1]), function(employee) {
        //         self.slidePage(new EmployeeView(employee).render());
        //     });
        // }
    }
    

};

app.initialize();