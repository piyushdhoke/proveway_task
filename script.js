document.addEventListener('DOMContentLoaded', function () {
    // Select all boxes
    const boxes = document.querySelectorAll('.box');
  
    boxes.forEach(box => {
      box.addEventListener('click', function () {
        // Toggle the box expansion
        box.classList.toggle('expanded');

          // Toggle the box expansion
    //   box.classList.toggle('expanded');
        
        // Get the options div (color and size controls)
        const options = box.querySelector('.options');
  
        // Show or hide the options based on the box state
        if (box.classList.contains('expanded')) {
          options.classList.add('visible');
          options.classList.remove('hidden');
        } else {
          options.classList.add('hidden');
          options.classList.remove('visible');
        }
  
        // Adjust the box size and color based on user input
        const colorPicker = box.querySelector('input[type="color"]');
        const sizeSlider = box.querySelector('input[type="range"]');
  
        colorPicker.addEventListener('input', function () {
          // Change box background color
          box.style.backgroundColor = this.value;
        });
  
        sizeSlider.addEventListener('input', function () {
          // Dynamically change the box size
          const newSize = this.value + 'px';
          box.style.width = newSize;
          box.style.height = newSize;
        });
      });
    });
  });
  