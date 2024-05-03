// expose.js
window.addEventListener('DOMContentLoaded', init);
var jsConfetti = new JSConfetti()

function init() {
    // swtich image

    const selectedImage = document.querySelector('img');
    const hornSelect = document.getElementById('horn-select')
    var selectedValue;
    // Add change event listener to the select element
    hornSelect.addEventListener('change', function() {
        // Get the selected option value
        selectedValue = hornSelect.value;
        // Update the image source based on the selected value
        switch(selectedValue) {
            case 'air-horn':
                selectedImage.src = 'assets/images/air-horn.svg';
                break;
            case 'car-horn':
                selectedImage.src = 'assets/images/car-horn.svg';
                break;
            case 'party-horn':
                selectedImage.src = 'assets/images/party-horn.svg';
                break;
            default:
                selectedImage.src = 'assets/images/no-image.png';
        }
    });

    // make sure correct volume image is set || volume is correct
    const volumeControlsDiv = document.getElementById('volume-controls');
    const volImage = volumeControlsDiv.querySelector('img');

    var audio = document.getElementsByClassName('hidden')[0]// Get the first element with the class 'hidden'
    const volume = document.getElementById('volume')


    // Add change event listener to the select element
    volume.addEventListener('change', function() {
        // Get the selected option value
        const vol = volume.value;
         // Get the value of the range input and convert it to a float between 0 and 1
        const volumeValue = parseFloat(volume.value) / 100;

        // Set the volume of the audio element
        audio.volume = volumeValue;

        // Update the image source based on the selected value
        if(vol == 0){
            volImage.src = 'assets/icons/volume-level-0.svg'
        }
        else if(vol > 0 && vol < 33){
            volImage.src = 'assets/icons/volume-level-1.svg'
        }
        else if(vol >= 33 && vol < 67){
            volImage.src = 'assets/icons/volume-level-2.svg'
        }
        else{
            volImage.src = 'assets/icons/volume-level-3.svg'
        } 
    });



    // play sound
    const play = document.querySelector('button');
    
    play.addEventListener('click', function() {
        switch(selectedValue) {
            case 'air-horn':
                audio.src = 'assets/audio/air-horn.mp3'; // Set the audio source
                audio.play(); // Play the audio
                break;
            case 'car-horn':
                audio.src = 'assets/audio/car-horn.mp3'; // Set the audio source
                audio.play(); // Play the audio
                break;
            case 'party-horn':
                audio.src = 'assets/audio/party-horn.mp3'; // Set the audio source
                audio.play(); // Play the audio
                jsConfetti.addConfetti({
                    //x:  window.innerWidth/2, 
                    y:  5*window.innerHeight/7
                    //intialPosition: 100
                
                });
                
     
                

                break;
            default:
                // You can add code here to handle other cases if needed
        }
    });
    
    
    
}