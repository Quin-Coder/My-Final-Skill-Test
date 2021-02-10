// Hello, My first trial connecting the fetch data in API Github it was successfull,
// But the problem is I don't know how to put together the code of TypeHead and Github API
// Hopefully, I have a chance to take next challenge.

// var form = document.getElementById("myForm")

// form.addEventListener('submit',function(e){
//     e.preventDefault()
    
//     var search = document.getElementById("search").value
//     var originalName = search.split('').join('')
//     // alert(originalName)

//     fetch("https://api.github.com/users/"+originalName)
//     .then((result)=>result.json())
//     .then((data)=>{
//         console.log(data)

//         document.getElementById("result").innerHTML = `
//         <img src="${data.avatar_url}"/>
//         `
//     })
// })


var substringMatcher = function(strs) {
    return function findMatches(q, cb) {
      var matches, substringRegex;
      matches = [];
      substrRegex = new RegExp(q, 'i');
      $.each(strs, function(i, str) {
        if (substrRegex.test(str)) {
          matches.push(str);
        }
      });
      cb(matches);
    };
  };
  
  
  var states = new Bloodhound({
          datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
          queryTokenizer: Bloodhound.tokenizers.whitespace,
          local: [
              {'name':'Quin', 'image': 'https://avatars.githubusercontent.com/u/7978950?v=4'},
              {'name':'Keneks', 'image': 'https://avatars.githubusercontent.com/u/1131292?v=4'},
              {'name':'Me', 'image': 'https://avatars.githubusercontent.com/u/160713?v=4'}, 
              ]
      });
  
      states.initialize();

  $('#the-basics .typeahead').typeahead({
    hint: true,
    highlight: true,
    minLength: 1
  },
  {
    name: 'states',
    display: 'name',
    source: states.ttAdapter(),
    templates: {
      empty: [
        '<div class="empty-message">',
          'No Record Found !',
        '</div>'
      ].join('\n'),
      suggestion: function (data) {
          return '<div class="man-section"><div class="image-section"><img src='+data.image+'></div><div class="description-section"><h1>Name: '+data.name+'</h1></div>';
      }
    },
  });