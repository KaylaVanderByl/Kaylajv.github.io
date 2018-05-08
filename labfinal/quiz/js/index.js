(function() {
  var questions = [{
    question: "Where is the 'boat' painting in the Simpsons' house?",
    choices: ["kitchen", "bedroom", "living room", "basement", "garage"],
    correctAnswer: 2
  }, {
    question: "Who is the principal of Springfield Elementary?",
    choices: ["Gary Chalmers", "Seymore Skinner", "Edna Krabappel", "Elizabeth Hoover", "Dewey Largo"],
    correctAnswer: 1
  }, {
    question: "On which street is Moe's tavern located?",
    choices: ["Walnut Street", "Oak Street", "Pine Road", "Evergreen Terrace", "Leaftree Road"],
    correctAnswer: 0
  }, {
    question: "What is the name of Milhouse's mother?",
    choices: ["Ann-Marie Van Houten", "Shirley Van Houten", "Lou-Anne Van Houten", "Elizabeth Van Houten", "Leigh-Anne Van Houten"],
    correctAnswer: 2
  }, {
    question: "What is the name of the doughnut shop in Springfield?",
    choices: ["Kwik-E-Mart", "Doh Nuts", "Krusty Kremes", "Large Lad Doughnuts", "Lard Lad"],
    correctAnswer: 4
  }, {
    question: "What is Kwik-E-Mart worker Apu's last name?",
    choices: ["Gumble", "	Patel", "	Amandopolis", "Nahasapeemapetilon", "Apu"],
    correctAnswer: 3
  }, {
    question: "	What is Springfield's neighbouring rival town called?",
    choices: ["Shelbyville", "Greensville", "	Poolville", "	Dirksville", "Smallville"],
    correctAnswer: 0
  }, {
    question: "What was Bart's childhood toy called?",
    choices: ["Mr Krusty", "Mr Bear", "Itchy", "Snugglepuss", "Mr Honeybunny"],
    correctAnswer: 4
  }];

  var questionCounter = 0;
  var selections = [];
  var quiz = $('#quiz');


  displayNext();


  $('#next').on('click', function (e) {
    e.preventDefault();


    if(quiz.is(':animated')) {
      return false;
    }
    choose();


    if (isNaN(selections[questionCounter])) {
      alert('Please make a selection!');
    } else {
      questionCounter++;
      displayNext();
    }
  });


  $('#prev').on('click', function (e) {
    e.preventDefault();

    if(quiz.is(':animated')) {
      return false;
    }
    choose();
    questionCounter--;
    displayNext();
  });


  $('#start').on('click', function (e) {
    e.preventDefault();

    if(quiz.is(':animated')) {
      return false;
    }
    questionCounter = 0;
    selections = [];
    displayNext();
    $('#start').hide();
  });


  $('.button').on('mouseenter', function () {
    $(this).addClass('active');
  });
  $('.button').on('mouseleave', function () {
    $(this).removeClass('active');
  });


  function createQuestionElement(index) {
    var qElement = $('<div>', {
      id: 'question'
    });

    var header = $('<h2>Question ' + (index + 1) + ':</h2>');
    qElement.append(header);

    var question = $('<p>').append(questions[index].question);
    qElement.append(question);

    var radioButtons = createRadios(index);
    qElement.append(radioButtons);

    return qElement;
  }

  function createRadios(index) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += questions[index].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }


  function choose() {
    selections[questionCounter] = +$('input[name="answer"]:checked').val();
  }


  function displayNext() {
    quiz.fadeOut(function() {
      $('#question').remove();

      if(questionCounter < questions.length){
        var nextQuestion = createQuestionElement(questionCounter);
        quiz.append(nextQuestion).fadeIn();
        if (!(isNaN(selections[questionCounter]))) {
          $('input[value='+selections[questionCounter]+']').prop('checked', true);
        }

        if(questionCounter === 1){
          $('.quiz2').show();
        }

        if(questionCounter === 1){
          $('#prev').show();
        } else if(questionCounter === 0){

          $('#prev').hide();
          $('#next').show();
        }
      }else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $('#next').hide();
        $('#prev').hide();
        $('#start').show();
      }
    });
  }


  function displayScore() {
    var score = $('<p>',{id: 'question'});

    var numCorrect = 0;
    console.log(selections);
    for (var i = 0; i < selections.length; i++) {
      console.log(selections[i], questions[i].correctAnswer);
      if (selections[i] === questions[i].correctAnswer) {
        numCorrect++;
      }
    }

    score.append('You got ' + numCorrect + ' questions out of ' +
                 questions.length + ' right!!!');
    return score;
  }
})();
