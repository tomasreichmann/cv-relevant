/**
 * Application entry point
 */

// Load application styles
import 'styles/bootstrap.min.css';
import 'styles/sweetalert.css';
import 'styles/style.scss';

// ================================
// START YOUR APP HERE
// ================================

$( function(){
    $('.person-bio').on('click', function(e){
        var title = $(this).closest('.h--link').text();
        var content = $(this).closest('div').find('.person-bio-content').text();
        swal({
            title: title,
            text: content
        });
        e.preventDefault();
    } )
} );
