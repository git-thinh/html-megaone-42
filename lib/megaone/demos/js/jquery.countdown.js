if (jQuery().countdown) {
    //today date plus month for demo purpose
    var demoDate = new Date();
    demoDate.setMonth(demoDate.getMonth()+1);

    jQuery('.comingsoon-countdown').each(function () {
        var $countDown = jQuery(this);
        var data = $countDown.data();

        var countToDate = (data.countTo !== undefined) ? new Date(data.countTo) : demoDate;

        $countDown.countdown({
            until: countToDate,
            labels: ['Years', 'Months', 'Weeks', 'Days', 'Hours', 'Mins', 'Sec'],
            format: data.format
        });
    });
}
