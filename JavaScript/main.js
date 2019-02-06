let wrapperDropdown = document.getElementsByClassName( 'wrapper-dropdown' )[0];

wrapperDropdown.onclick = activation;

function activation() {
    this.classList.toggle( 'active' );
};