
    var mapContainer = document.getElementById('map'),
        mapOption = { 
            center: new kakao.maps.LatLng(37.45284868340988, 126.6998627470755), 
            level: 3
        };

    var map = new kakao.maps.Map(mapContainer, mapOption);

    var markerPosition  = new kakao.maps.LatLng(37.45284868340988, 126.6998627470755); 


    var marker = new kakao.maps.Marker({
        position: markerPosition
    });

    marker.setMap(map);

    var iwContent = '<div style="padding:5px;">WEEDING<br><a href="https://map.kakao.com/link/map/WEEDING,33.450701,126.570667" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/Hello World!,37.45284868340988, 126.6998627470755" style="color:blue" target="_blank">길찾기</a></div>',
        iwPosition = new kakao.maps.LatLng(37.45284868340988, 126.6998627470755);

    var infowindow = new kakao.maps.InfoWindow({
        position : iwPosition, 
        content : iwContent 
    });
    
    infowindow.open(map, marker); 