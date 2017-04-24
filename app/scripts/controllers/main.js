'use strict';

/**
 * @ngdoc function
 * @name scratchApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the scratchApp
 */
angular.module('scratchApp')
    .controller('MainCtrl', function ($scope) {

        $(document).ready(function () {
            $('.collapsible').collapsible();
        });

        $scope.me = {
            one: 'I have been designing and developing websites and application for 4+ years a range of languages and frameworks including Javascript, AngularJS, Ionic, SASS, HTML5 / CSS3, Modern CSS Frameworks (Bootstrap, Materialize, etc), Wordpress, etc.. I also have experience utilizing the following tools: Github, Grunt / Gulp, Bower / Npm, Yeoman, Sketch, AdobeCC.',
            two: 'I strive to be pragmatic, innovative, and creative in my thought process while coding. I enjoy reading forums such as stack overflow to keep myself in line with the freshest, most efficient coding practices.',
            three: 'The practices outlined John Papa Style Guide for AngularJS has become second habit for me. AngularJS is moving very quickly now; as am I, as I am trying to keep up with it.',
            four: 'Please feel free to view any of my projects or work below and contact me if you feel I would be a good fit with you.'
        }

        $scope.work = {
            one: 'Being the only front end developer at Work Machines required that I obtain a deeper knowledge of AngularJS. From API interaction to creating data services and custom directives, all development has been done in alignment with the John Papa Angular 1 styleguide and JS best practices.',
            two: 'I created a website with count-down clock for this couple that counted down to thier wedding. After the wedding it started counting up and is still counting today.',
            three: 'RHC Consulting is a very professional and particular agency. I very thoughtfully created a website, business cards, and implemented SEO for the agency. They had very specific requests and wants for the design and functionality; I created many rapid prototypes to accomodate the client.'
        }

        $scope.project = {
            one: 'This is a demonstration of my ability to create a responsive experience for all screen sizes. An elegant job boards concept that utilizes a vertical chronological timeline to create a natural user experience within a clean, modern user interface.',

            two: 'A stylish ecommerce site concept with a completely responsive grid system designed for the best possible user experience on all devices.'
        }
    });
