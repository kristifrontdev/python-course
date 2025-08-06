const textInput = document.querySelector('#text');
const resultField = document.querySelector('#result');

textInput.addEventListener('input', function(event){
    event.preventDefault();
    if (textInput.value.trim().length > 2) search(textInput.value.trim());
});

function search(text){
    fetch('/search', {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({
            "text" : text
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        resultField.innerHTML = '';
        data.comments.forEach(item=> {
            const a = document.createElement('a');
            a.style.display = 'block';
            a.innerHTML = item.text.replace(new RegExp(`(${text})`, 'gi'), '<mark>$1</mark>');
            a.href = '/comment/' + item._id;
            resultField.append(a);
        })
    })
}