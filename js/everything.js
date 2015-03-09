 var socket = io();
  var numnum = 100;
  var numnum2 = 100;
  var bullshit = 50;
  var player1 = new Player(1,0,100)
  var player2 = new Player(2,0,100)
  var fireballactive = 0;

  function Player(number,type,life)
  {
    this.number = number;
    this.type = type;
    this.life = life;
  }

  Player.setnumber = function(num) 
    {
        number = num;
    };

    Player.settype = function(typ) 
    {
        type = typ;
    };

  function disablin1()
  {
    $('#attack').prop('disabled', true);
    $('#attack2').prop('disabled', true);
     $('#attack5').prop('disabled', false);
     if (player2.type === 1)
    {
      if (fireballactive === 1)
      {
        $('#attack6').prop('disabled', true);
      }
      else
      {
        $('#attack6').prop('disabled', false);
      }
    }
    else 
    {
      $('#attack6').prop('disabled', false);
    }
     $('#heal').prop('disabled', true);
     $('#heal2').prop('disabled', false);
  }
  function disablin2()
  {
    $('#attack').prop('disabled', false);
    if (player1.type === 1)
    {
      // alert("yolo" + fireballactive);
      if (fireballactive === 1)
      {
        $('#attack2').prop('disabled', true);
      }
      else
      {
        $('#attack2').prop('disabled', false);
      }
    }
    else 
    {
      $('#attack2').prop('disabled', false);
    }
     $('#attack5').prop('disabled', true);
     $('#attack6').prop('disabled', true);
     $('#heal').prop('disabled', false);
     $('#heal2').prop('disabled', true);
  }
  function allow(stuff)
  {
    $('#' + stuff).prop('disabled', false);
  }
  function disallow(otherstuff)
  {
    $('#' + otherstuff).prop('disabled', true);
  }

  function disallowplayers()
  {
    $('#redplayer').prop('disabled', true);
    $('#blueplayer').prop('disabled', true);
    $('#greenplayer').prop('disabled', true);
  }

  function selectplayer(player){
    $('#' + player).css({
          'border' : "solid black 5px",
        },200);
  }

  function setlittleblue(player)
  {
    if (player === 1)
    {
        $('#littlebluecircle').css({
              'margin-left' : "-=350px",
            });
    }
    else if (player === 2)
    {
        $('#littlebluecircle').css({
              'margin-left' : "+=350px",
            });
    }
  }

function setlittlered(player)
  {
    if (player === 1)
    {
        $('#fireball').css({
              'margin-left' : "-=320px",
            });
    }
    else if (player === 2)
    {
        $('#fireball').css({
              'margin-left' : "+=365px",
            });
    }
  }

  function setgreenlines(player)
  {
    if (player === 1)
    {
        $('#greenlines').css({
              'margin-left' : "+=255",
            });
    }
    else if (player === 2)
    {
        $('#greenlines').css({
              'margin-left' : "-=430",
            });
    }
  }

function setwaterspout(player)
  {
    if (player === 1)
    {
        $('#waterspout').css({
              'margin-left' : "+=396",
            });
    }
    else if (player === 2)
    {
        $('#waterspout').css({
              'margin-left' : "-=288",
            });
    }
  }
  function fireattackone(number)
  {
    if (number === 1)
    {
      if (player2.life > 0)
          {
            player2.life = player2.life - 10;
            $('#health2').text(player2.life);
            $('#redbar2').animate({
              'width' : "-=" + bullshit,
            },100);
            $('#player1').animate({
              'margin-left' : "+=650px",
            },300, function(){
              $('#player2').animate({
                'margin-left' : "+=100px",
              },50, function() {
                $('#player2').animate({
                  'margin-left' : "-=100px",
                },500);
               });
              });
             $('#player1').animate({
              'margin-left' : "-=650px",
            },300);
          }
        }
        else if (number === 2)
        {
          if (player1.life > 0)
          {
          player1.life = player1.life - 10;
            $('#health').text(player1.life);
            $('#redbar').animate({
              'width' : "-=" + bullshit,
            },100);
            $('#player2').animate({
              'margin-left' : "-=675px",
            },300, function(){
              $('#player1').animate({
                'margin-left' : "-=100px",
              },50, function() {
                $('#player1').animate({
                  'margin-left' : "+=100px",
                },500);
               });
              });
             $('#player2').animate({
              'margin-left' : "+=675px",
            },300);
          }
        }
  }

  function waterattackone(number)
  {
    if (fireballactive)
    {
      $('#fireball').css({
        'opacity' : "0",
      });
      fireballactive = 0;
    }
    if (number === 1)
    {
        if (player2.life > 0)
            {
            player2.life = player2.life - 10;
            $('#health2').text(player2.life);
            $('#redbar2').animate({
              'width' : "-=" + bullshit,
            },100);
             $('#littlebluecircle').show();
             $('#littlebluecircle').animate({
              'margin-left' : "+=675px",
              'margin-top' : "-=50px",
              'height' : "+=100px",
              'width' : "+=100px",
              'opacity' : "0.5",
            },200, function(){
              $('#littlebluecircle').hide();
              $('#littlebluecircle').animate({
              'margin-left' : "-=675px",
              'margin-top' : "+=50px",
              'height' : "-=100px",
              'width' : "-=100px",
              'opacity' : "1",    
            },200);
            });
          }
    }
    else if (number === 2)
    {
      if (player1.life > 0)
            {
            player1.life = player1.life - 10;
            $('#health').text(player1.life);
            $('#redbar').animate({
              'width' : "-=" + bullshit,
            },100);
             $('#littlebluecircle').show();
             $('#littlebluecircle').animate({
              'margin-left' : "-=750px",
              'margin-top' : "-=50px",
              'height' : "+=100px",
              'width' : "+=100px",
              'opacity' : "0.5",
            },200, function(){
              $('#littlebluecircle').hide();
              $('#littlebluecircle').animate({
              'margin-left' : "+=750px",
              'margin-top' : "+=50px",
              'height' : "-=100px",
              'width' : "-=100px",
              'opacity' : "1",    
            },200);
              });
           }
    }
  }

  function grassattackone(number)
  {
    if (number === 1)
    {
       if (player2.life > 0)
          {
            player2.life = player2.life - 10;
            $('#health2').text(player2.life);
            $('#redbar2').animate({
              'width' : "-=" + bullshit,
            },100);
            $('#greenline1').animate({
              'borderWidth' : "+=3px",
            },100);
            $('#greenline2').animate({
              'borderWidth' : "+=3px",
            },100);
            $('#greenlines').animate({
              'opacity' : "1",
            },200, function(){
              $('#greenlines').animate({
                 'opacity' : "0",
              },200);
          });
            $('#greenline1').animate({
              'borderWidth' : "-=3px",
            });
            $('#greenline2').animate({
              'borderWidth' : "-=3px",
            });
        }
    }
    else if (number === 2)
    {
      if (player1.life > 0)
          {
            player1.life = player1.life - 10;
            $('#health').text(player1.life);
            $('#redbar').animate({
              'width' : "-=" + bullshit,
            },100);
            $('#greenline1').animate({
              'borderWidth' : "+=3px",
            },100);
            $('#greenline2').animate({
              'borderWidth' : "+=3px",
            },100);
            $('#greenlines').animate({
              'opacity' : "1",
            },200, function(){
              $('#greenlines').animate({
                 'opacity' : "0",
              },200);
          });
            $('#greenline1').animate({
              'borderWidth' : "-=3px",
            });
            $('#greenline2').animate({
              'borderWidth' : "-=3px",
            });
          } 
    }
  }

function animateMe2(check1,check2,speed,playerr){
   if (playerr === 1)
  {
   $('#player1').css({
      'z-index': "3",
    });
 }
 else
 {
    $('#player2').css({
      'z-index': "3",
    });
 }
    $('#fireball').animate(
        {
        'margin-left': "-=100px",
        },
        {
        duration: speed,
        complete: function(){
          if (playerr === 1)
            {
              if (check1 === player1.life)
                {
                  animateMe(check1,check2,speed,1);
                }
                else
                {
                  if (fireballactive === 0)
                  {
                  $('#fireball').hide();
                  $('#fireball').css({
                    'opacity' : "1",
                  });
                  }
                  else
                  {
                    $('#fireball').hide();
                    fireballactive = 0;
                  }
                }
            }
            else
            {
              if (check2 === player2.life)
                {
                  animateMe(check1,check2,speed,2);
                }
                else
                {
                  if (fireballactive === 0)
                  {
                  $('#fireball').hide();
                  $('#fireball').css({
                    'opacity' : "1",
                  });
                  }
                  else
                  {
                    $('#fireball').hide();
                    fireballactive = 0;
                  }
                }
            }
         
        }
    });
}


 function animateMe(check1,check2,speed,playerr){
  $('#fireball').show();
  if (playerr === 1)
  {
   $('#player1').css({
      'z-index': "1",
    });
 }
 else
 {
    $('#player2').css({
      'z-index': "1",
    });
 }
    $('#fireball').animate(
        {
        'margin-left': "+=100px",
        },
        {
        duration: speed,
        complete: function(){
            if (playerr === 1)
            {
              if (check1 === player1.life)
                {
                  animateMe2(check1,check2,speed,playerr);
                }
                else
                {
                  // window.alert(fireballactive);
                  if (fireballactive === 0)
                  {
                  $('#fireball').hide();
                  $('#fireball').css({
                    'opacity' : "1",
                  });
                  }
                  else
                  {
                    $('#fireball').hide();
                    fireballactive = 0;
                  }
                  $('#fireball').css({
                    'margin-left': "-=100px",
                    });
                }
            }
            else
            {
              if (check2 === player2.life)
                {
                  animateMe2(check1,check2,speed,playerr);
                }
                else
                {
                  if (fireballactive === 0)
                  {
                  $('#fireball').hide();
                  $('#fireball').css({
                    'opacity' : "1",
                  });
                  }
                  else
                  {
                    $('#fireball').hide();
                    fireballactive = 0;
                  }
                  $('#fireball').css({
                    'margin-left': "-=100px",
                    });
                }
            }
        }
    });
}

  function fireattacktwo(number)
  {
    fireballactive = 1;
    var x = player1.life;
    var y = player2.life;
    if (number === 1)
    {
      if (player2.life > 0)
          {
            player2.life = player2.life - 10;
            $('#health2').text(player2.life);
            $('#redbar2').animate({
              'width' : "-=" + bullshit,
            },100);
            var c = 0;
            animateMe(x,y,500,1);
          }
    }
    else if (number === 2)
    {
      if (player1.life > 0)
          {
            player1.life = player1.life - 10;
            $('#health').text(player1.life);
            $('#redbar').animate({
              'width' : "-=" + bullshit,
            },100);
            var c = 0;
            animateMe(x,y,500,2);
          }
    }
  }

  function waterattacktwo(number)
  {
    if (fireballactive)
    {
      $('#fireball').css({
        'opacity' : "0",
      });
      fireballactive = 0;
    }
    if (number === 1)
    {
       if (player2.life > 0)
          {          
            player2.life = player2.life - 10;
            $('#health2').text(player2.life);
            $('#redbar2').animate({
              'width' : "-=" + bullshit,
            },100);
            $("#waterspout").show();
            $("#waterspoutbody").animate({
              'margin-top' : "-=140px",
              'height' : "+=140px",
            },400);
            $("#waterspouttop").animate({
              'margin-top' : "-=140px",
            },400, function() {
              $("#waterspoutbody").animate({
              'margin-top' : "+=140px",
              'height' : "-=140px",
            },400);
            $("#waterspouttop").animate({
              'margin-top' : "+=140px",
            },400, function(){
              $("#waterspout").hide();
            });
            });
          }
      }
      else if (number === 2)
      {
        if (player1.life > 0)
          {          
            player1.life = player1.life - 10;
            $('#health').text(player1.life);
            $('#redbar').animate({
              'width' : "-=" + bullshit,
            },100);
            $("#waterspout").show();
            $("#waterspoutbody").animate({
              'margin-top' : "-=140px",
              'height' : "+=140px",
            },400);
            $("#waterspouttop").animate({
              'margin-top' : "-=140px",
            },400, function() {
              $("#waterspoutbody").animate({
              'margin-top' : "+=140px",
              'height' : "-=140px",
            },400);
            $("#waterspouttop").animate({
              'margin-top' : "+=140px",
            },400, function(){
              $("#waterspout").hide();
            });
            });
          }
      }
  }
 

  function attacking(number, type, attack)
  {
      if(number === 1)
      {
        if (type === 1)
        {
            if (attack === 1)
            {
                socket.emit('gregsattack', {
                  'health': player2.life,
                  'bullshit': "this is a test"
                })
                fireattackone(1);
            }
            else if (attack === 2)
            {
                fireattacktwo(1);
            }
            else if (attack === 3)
            {
              
            }
            else if (attack === 4)
            {
              
            }
        }
        else if (type === 2)
        {
          if (attack === 1)
            {
                waterattackone(1);
                fireballactive = 0;
            }
            else if (attack === 2)
            {
                waterattacktwo(1);
                fireballactive = 0;
            }
            else if (attack === 3)
            {
              
            }
            else if (attack === 4)
            {
              
            }
        }
        else if (type === 3)
        {
           if (attack === 1)
            {
                grassattackone(1);
                fireballactive = 0;
            }
            else if (attack === 2)
            {

            }
            else if (attack === 3)
            {
              
            }
            else if (attack === 4)
            {
              
            }
      }
    }
      else if (number === 2)
      {
        if (type === 1)
        {
          if (attack === 1)
          {
            fireattackone(2);
          }
          else if (attack ===2)
          {
            fireattacktwo(2);
          }
           else if (attack ===3)
          {
            
          }
           else if (attack ===4)
          {
            
          }
        }
        else if (type === 2)
        {
          if (attack === 1)
          {
            waterattackone(2);
            fireballactive = 0;
          }
          else if (attack ===2)
          {
            waterattacktwo(2);
            fireballactive = 0;
          }
           else if (attack ===3)
          {
            
          }
           else if (attack ===4)
          {
            
          }
        }
        else if (type === 3)
        {
           if (attack === 1)
            {
                grassattackone(2);
                fireballactive = 0;
            }
            else if (attack === 2)
            {

            }
            else if (attack === 3)
            {
              
            }
            else if (attack === 4)
            {
              
            }
        }
      }
  }

  function setplayer(player,type)
  {
      if (type === 1)
      {
        $('#' + player).css({
        'height' : "50px",
        'width' : "50px",
        'border-radius' : "50%",
        'background-color' : "red",
        'margin' : "150px",
        'margin-left' : "200px",
        'position' : "relative",
        'z-index' : "1",
        });
      }
      else if (type === 2)
      {
        $('#' + player).css({
        'height' : "50px",
        'width' : "50px",
        'border-radius' : "50%",
        'background-color' : "blue",
        'margin' : "150px",
        'margin-left' : "200px",
        'z-index' : "1",
        });
      }
      else if (type === 3)
      {
        $('#' + player).css({
        'height' : "50px",
        'width' : "50px",
        'border-radius' : "50%",
        'background-color' : "green",
        'margin' : "150px",
        'margin-left' : "200px",
        'z-index' : "1",
        });
      }
  }
  $(document).ready(function(){
      $('#play').prop('disabled', true);
  });
  $('form').submit(function(){
    socket.emit('chat message', $('#m').val());
    $('#m').val('');
    return false;
  });
  socket.on('chat message', function(msg){
    $('#messages').append($('<li>').text(msg));
  });
  $('#attack').click(function(){
    socket.emit('attack');
  });
  socket.on('attack', function(num){
    if (player1.type === 1)
     {
        attacking(1,1,1);
     }
     else if (player1.type === 2)
     {
        attacking(1,2,1);
     }
     else if (player1.type === 3)
     {
        attacking(1,3,1);
     }
     disablin1();  
  });
  $('#attack2').click(function(){
    socket.emit('attack2');
  });
  socket.on('attack2', function(num){
    if (player1.type === 1)
     {
        attacking(1,1,2);
     }
     else if (player1.type === 2)
     {
        attacking(1,2,2);
     }
     else if (player1.type === 3)
     {
        attacking(1,3,2);
     }
     disablin1();  
  });

  $('#heal').click(function(){
    socket.emit('heal');
  });
  socket.on('heal', function(num){
    if (player1.life < 100)
    {
          player1.life = player1.life + 10;
        $('#health').text(player1.life);
        $('#redbar').animate({
          'width' : "+=" + bullshit,
        },100);
        $('#player1').animate({
          'opacity' : "0.2",
        },200, function() {
          $('#player1').animate({
          'opacity' : "1",
        },200);
      });
      disablin1();
    }
  });
  $('#attack5').click(function(){
    socket.emit('attack5');
  });
  socket.on('attack5', function(num){
     if (player2.type === 1)
     {
        attacking(2,1,1);
     }
     else if (player2.type === 2)
     {
        attacking(2,2,1);
     }
     else if (player2.type === 3)
     {
        attacking(2,3,1);
     }
     disablin2();
  });
  $('#attack6').click(function(){
    socket.emit('attack6');
  });
  socket.on('attack6', function(num){
     if (player2.type === 1)
     {
        attacking(2,1,2);
     }
     else if (player2.type === 2)
     {
        attacking(2,2,2);
     }
     else if (player2.type === 3)
     {
        attacking(2,3,2);
     }
     disablin2();
  });

  $('#heal2').click(function(){
    socket.emit('heal2');
  });
  socket.on('heal2', function(num){
    if (player2.life < 100)
    {
      player2.life = player2.life + 10;
    $('#health2').text(player2.life);
    $('#redbar2').animate({
      'width' : "+=" + bullshit,
    },100);
     $('#player2').animate({
          'opacity' : "0.2",
        },200, function() {
          $('#player2').animate({
          'opacity' : "1",
        },200);
      });
     disablin2();
    }
  });

   $('#play').click(function(){
    socket.emit('play');
  });
  socket.on('play', function(){
    $('#everything').show();
    $('#play').hide();
    $('#redplayer').hide();
    $('#blueplayer').hide();
    $('#greenplayer').hide();
  });

  $('#redplayer').click(function(){
    socket.emit('redplayer');
  });
  socket.on('redplayer', function(){
    if (player1.type === 0)
    {
      player1.type = 1;
      selectplayer('redplayer');
      disallow('redplayer');
      setplayer('player1',1);
      setlittlered(1);
    }
    else
    {
      player2.type = 1;
      selectplayer('redplayer');
      disallowplayers();
      setplayer('player2',1);
      setlittlered(2);
      allow('play');
    }
});

   $('#blueplayer').click(function(){
    socket.emit('blueplayer');
  });
  socket.on('blueplayer', function(){
    if (player1.type === 0)
    {
      player1.type = 2;
      selectplayer('blueplayer');
      disallow('blueplayer');
      setplayer('player1',2);
      setlittleblue(1);
      setwaterspout(1);
    }
    else
    {
      player2.type = 2;
      selectplayer('blueplayer');
      disallowplayers();
      setplayer('player2',2);
      setlittleblue(2);
      setwaterspout(2);
      allow('play');
    }
  });
   $('#greenplayer').click(function(){
    socket.emit('greenplayer');
  });
  socket.on('greenplayer', function(){
    if (player1.type === 0)
    {
      player1.type = 3;
      selectplayer('greenplayer');
      disallow('greenplayer');
      setplayer('player1',3);
      setgreenlines(1);
    }
    else
    {
      player2.type = 3;
      selectplayer('greenplayer');
      disallowplayers();
      setplayer('player2',3);
      setgreenlines(2);
      allow('play');
    }
  });

   $('#chatcontrol').click(function(){
    socket.emit('chatcontrol');
  });
  socket.on('chatcontrol', function(){
    $('#form1').toggle();
  });