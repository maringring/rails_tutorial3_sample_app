// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require popper


//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

$(document).on('turbolinks:load', function() {
    // 드롭다운을 트리거하는 요소에 마우스가 올라갔을 때 드롭다운을 표시
    $('.dropdown-toggle').on('mouseenter', function() {
      $(this).addClass('show'); // 드롭다운을 표시하기 위해 'show' 클래스 추가
      $(this).next('.dropdown-menu').addClass('show'); // 드롭다운 메뉴도 'show' 클래스 추가
    });
  
    // 드롭다운 영역에서 마우스가 떠났을 때 드롭다운을 숨김
    $('.dropdown-toggle').on('mouseleave', function() {
      $(this).removeClass('show'); // 드롭다운을 숨기기 위해 'show' 클래스 제거
      $(this).next('.dropdown-menu').removeClass('show'); // 드롭다운 메뉴도 'show' 클래스 제거
    });
  
    // 드롭다운 메뉴에 마우스가 올라가도 드롭다운을 유지
    $('.dropdown-menu').on('mouseenter', function() {
      $(this).addClass('show'); // 드롭다운 메뉴를 유지하기 위해 'show' 클래스 추가
      $(this).prev('.dropdown-toggle').addClass('show'); // 드롭다운 트리거 요소에도 'show' 클래스 추가
    });
  
    // 드롭다운 메뉴 영역에서 마우스가 떠났을 때 드롭다운을 유지
    $('.dropdown-menu').on('mouseleave', function() {
      $(this).removeClass('show'); // 드롭다운 메뉴를 숨기기 위해 'show' 클래스 제거
      $(this).prev('.dropdown-toggle').removeClass('show'); // 드롭다운 트리거 요소도 'show' 클래스 제거
    });
  });

  //hamberger
  $(document).on('turbolinks:load', function() {
    // 햄버거 버튼 클릭 이벤트
    $('#hamburger').on('click', function() {
      // 네비게이션 메뉴의 현재 상태 확인
      var isOpen = $('#navbar-menu').hasClass('in');
  
      // 현재 상태에 따라 토글
      if (isOpen) {
        $('#navbar-menu').removeClass('in');
      } else {
        $('#navbar-menu').addClass('in');
      }
    });
  });
  