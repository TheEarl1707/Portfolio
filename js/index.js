$(function() {
    $('body').on('click', '.btnModalOpen', function() {
        let modalName = $(this)[0]['attributes']['data-target']['value'];

        $(modalName).modal('show');
    });

    $('body').on('click', '.btnCloseModal', function() {
        let modalName = $(this)[0]['attributes']['data-target']['value'];

        $(modalName).modal('hide');
    });

    $('#btnSSSDNTSEnrollmentSystem').magnificPopup({
        items: [
            {
                src: 'assets/SDNTSEnrollment/index.png',
                title: 'The landing page of the system'
            },
            {
                src: 'assets/SDNTSEnrollment/news.png',
                title: 'The News and Events page. This is where the site visitors can check the posted announcements. The user can also share an individual post in their facebook profile'
            },
            {
                src: 'assets/SDNTSEnrollment/login_student.png',
                title: 'Login page for the students.'
            },
            {
                src: 'assets/SDNTSEnrollment/student_main.png',
                title: 'Dashboard page for the students. This is where the student can see the current status of their enrollment.'
            },
            {
                src: 'assets/SDNTSEnrollment/staff_main.png',
                title: '(Staff and Admins only) Staff Dashboard page. This shows the current amount of students for the particular school year, as well as statistics and analysis about the students. Only the registrars (JHS/SHS) can access the enrollment management pages'
            },
            {
                src: 'assets/SDNTSEnrollment/admin_announcement.png',
                title: '(Admin only) The page for managing the announcements posted in the News and Events page. The other management pages can also be accessed by the admin by interacting with the sidebar to reveal more pages.'
            }
        ],

        gallery: {
            enabled: true
        },

        type: 'image'
    });

    $('#btnSSTaskManagerWebsite').magnificPopup({
        items: [
            {
                src: 'assets/TaskManager/login.png',
                title: 'This is where the user can login, provided that they have already made an account.'
            },
            {
                src: 'assets/TaskManager/register.png',
                title: 'Registration page. The website also requires a profile picture, which will be displayed at the top of the sidebar.'
            },
            {
                src: 'assets/TaskManager/dashboard.png',
                title: 'This is the page where the user can see their active tasks. They can add new tasks by pressing the \'Add Task\' button at the top right. In the table, the user can view, mark the task as complete, or move the task into the archive.'
            },
            {
                src: 'assets/TaskManager/edit.png',
                title: 'Once the user clicks the view button, a modal containing the selected task\'s info is displayed. The user can start editing the task by clicking the \'Edit\' button, and by pressing the \'Submit\' button, their edit will be saved. '
            },
            {
                src: 'assets/TaskManager/completed.png',
                title: 'This page contains the completed tasks. You can unmark it, and by doing so, will put the task in the dashboard table.'
            },
            {
                src: 'assets/TaskManager/archived.png',
                title: 'This page contains the archived tasks. Unarchiving a task means returning it to the most appropriate table, depending if the user had marked the task as complete or not.'
            }
        ],

        gallery: {
            enabled: true
        },

        type: 'image'
    });

    $('#btnSSMovieTicket').magnificPopup({
        items: [
            {
                src: 'assets/MovieTicket/movies.png',
                title: 'Movies page. The user can click a movie to see more details'
            },
            {
                src: 'assets/MovieTicket/profile.png',
                title: 'Profile page. This shows the user\'s fiat and reward balance, as well as the last 5 transactions of the user'
            },
            {
                src: 'assets/MovieTicket/buyticket.png',
                title: 'Transaction modal wherein the user balance is shown, as well as details of the movie'
            },
            {
                src: 'assets/MovieTicket/admin-saleschart.png',
                title: '(Admin only) Sales chart that displays the amount of tickets sold of each movie in the included dates'
            },
            {
                src: 'assets/MovieTicket/admin-moviesaddon.png',
                title: '(Admin only) Managing the movies and add-ons'
            }
        ],

        gallery: {
            enabled: true
        },

        type: 'image'
    });

    $("#btnSSDormManagement").magnificPopup({
        items: [
            {
                src: 'assets/DMS/index.png',
                title: 'This is the user\s landing page, wherein they can see the last people who have enter/exited the dorms, as well as to check for a dormitory\'s room availability.'
            },
            {
                src: 'assets/DMS/reserve.png',
                title: 'For users who can\'t register immediately, they can "reserve" a dormitory\'s room'
            },
            {
                src: 'assets/DMS/register.png',
                title: 'This is the page where the users can register to acquire a dorm room. Users that has a reservation should input the necessary information, else their registration will be denied'
            },
            {
                src: 'assets/DMS/logbook.png',
                title: 'This is the page where the users can tell the dorm manager that they will be entering or exiting the dorm.'
            },
            {
                src: 'assets/DMS/violations.png',
                title: 'This is the page where the users will see any violation message/s that the dorm manager can only create.'
            },
            {
                src: 'assets/DMS/updateinfo.png',
                title: 'This is the page where a user with a registered dorm room can update the information that they have provided when they registered for a dorm room. Displayed below is the information of the user that is stored from the database.'
            }
        ],

        gallery: {
            enabled: true
        },

        type: 'image'
    });

    $("#btnSSMovieReview").magnificPopup({
        items: [
            {
                src: 'assets/MovieReview/index.png',
                title: 'This page shows all available movies that the user can check'
            },
            {
                src: 'assets/MovieReview/addreview.png',
                title: 'This image shows a registered user about to write a review'
            },
            {
                src: 'assets/MovieReview/admin.png',
                title: '(Admin only) This page handles how the administrator will add, update or delete movies from the system.'
            }
        ],

        gallery: {
            enabled: true
        },

        type: 'image'
    });
});