(->
  Invitation = ()->
    vm = @
    vm.message = "Wedding Guest List"
    vm.sendMessage = ()->

    guests = [
      { 
        "first_name": "Dave", 
        "last_name": "Barker",
        "approved": "true",
        "images": [
          "full": "http://lorempixel.com/500/500/",
          "thumb": "http://lorempixel.com/100/100/"
        ]
      },
      { 
        "first_name": "Sheryl", 
        "last_name": "Crow",
        "approved": "true",
        "images": [
          "full": "http://lorempixel.com/500/500/",
          "thumb": "http://lorempixel.com/100/100/"
        ]
      },
      { 
        "first_name": "Nathan", 
        "last_name": "Arnold",
        "approved": "false",
        "images": [
          "full": "http://lorempixel.com/500/500/",
          "thumb": "http://lorempixel.com/100/100/"
        ]
      }
    ]

    invitation = {
      "title": "Arnold Family",
      "email": "arnold@gmail.com",
      "sent_at": "Tue, 21 Jul 2015",
      "opened_at": "Tue, 21 Jul 2015",
      "replied_at": "Tue, 21 Jul 2015",
      "notes": "",
      "guests": guests
    }

    invitation2 = {
      "title": "Barker Family",
      "email": "barker@gmail.com",
      "sent_at": "Tue, 21 Jul 2015",
      "opened_at": "Tue, 21 Jul 2015",
      "replied_at": "",
      "notes": "",
      "guests": guests
    }

    vm.invitations = [
      invitation,
      invitation2
    ]

    return

  angular
    .module('app')
    .controller('Invitation', Invitation)
)()
