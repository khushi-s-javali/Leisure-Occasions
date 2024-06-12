const sortButton = document.getElementById('sortButton');
    const eventDivs = Array.from(document.querySelectorAll('.content'));

    // Function to convert day and month strings to Date
    function convertToDate(dateString) {
      const parts = dateString.split(' ');
      const day = parseInt(parts[0]);
      const monthString = parts[1];
      const monthIndex = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].indexOf(monthString);
      const currentDate = new Date();
      currentDate.setDate(day);
      currentDate.setMonth(monthIndex);
      return currentDate;
    }

    // Function to sort div elements based on dates
    function filterAccordingToDate() {
      const container = document.querySelector('.display');
      const sortedDivs = Array.from(container.querySelectorAll('.row')).sort((a, b) => {
        const dateA = convertToDate(a.querySelector('.date').textContent);
        const dateB = convertToDate(b.querySelector('.date').textContent);
        return dateA - dateB;
      });

      // Reattach the sorted divs to the container
container.innerHTML = ''; // Clear the container
      sortedDivs.forEach(div => {
        container.appendChild(div);
        container.appendChild(document.createElement('br')); // Add a break tag
      });
    }

    sortButton.addEventListener('click', filterAccordingToDate);