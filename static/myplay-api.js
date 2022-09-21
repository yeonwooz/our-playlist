
function deletePlaylist(index) {
    
    let delete_title = $("." + `area-title${index}`).text;

    $.ajax({
      type: "POST",
      url: "/delete/playlist",
      data: { delete_give: delete_title },
      success: function (response) { // 성공하면
        if (response["result"] == "success") {
          
          // 3. 성공 시 페이지 새로고침하기
          // window.location.reload();
          alert("플레이 리스트 삭제 완료!")
        } else {
          alert("다시 입력하세요!")
        }
      }
    })
  }

function searchSong() {
    let search_song = $("#search-song").val();
    
    $.ajax({
      type: "POST",
      url: "/search",
      data: { search_give: search_song },
      success: function (response) { // 성공하면
        if (response["result"] == "success") {
          console.log(response['search_song_name_list']);
          // 3. 성공 시 페이지 새로고침하기
          // window.location.reload();
        } else {
          alert("다시 입력하세요!")
        }
      }
    })
  }

  function addSong() {
    let song = $("#add-song").text();
    let artist = $("#add-artist").text();
    // 버튼에 해당하는 텍스트 요소
    // 함수 인자로 id값 사용

    $.ajax({
      type: "POST",
      url: "/add/song",
      data: { song_give: song, artist_give: artist },
      success: function (response) { // 성공하면
        if (response["result"] == "success") {
          alert("포스팅 성공!");
          // 3. 성공 시 페이지 새로고침하기
          // window.location.reload();
        } else {
          alert("다시 입력하세요!")
        }
      }
    })
  }