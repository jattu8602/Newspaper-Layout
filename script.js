// Dark/Light Mode Toggle Functionality
document.addEventListener('DOMContentLoaded', function () {
  const modeSwitch = document.querySelector('.mode-switch')
  const modeIcon = document.getElementById('mode-icon')
  const body = document.body

  // Set initial state (dark mode by default)
  modeIcon.textContent = '🌙'

  modeSwitch.addEventListener('click', function () {
    // Toggle light-mode class on body
    body.classList.toggle('light-mode')

    // Update icon based on current mode
    if (body.classList.contains('light-mode')) {
      modeIcon.textContent = '🌞' // Sun icon for light mode
    } else {
      modeIcon.textContent = '🌙' // Moon icon for dark mode
    }
  })
})
