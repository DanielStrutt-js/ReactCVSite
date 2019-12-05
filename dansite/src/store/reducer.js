const initialState = {

    menu: 'mainMenu'
}

const reducer = (state = initialState, action) => {
    if(action.type === 'MAINMENU') {
        return{
            menu : 'mainMenu'
        }
    }
    if(action.type === 'ABOUTMENU') {
        return{
            menu: this.state.menu = 'aboutMenu'
        }
    }
    
        return state;
        
};



export default reducer;
