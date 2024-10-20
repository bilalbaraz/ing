const initialState = {
    employees: [],
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_EMPLOYEE':
            if (state.employees.find(emp => emp.email === action.payload.emailAddress)) {
                alert('Bu e-posta adresi zaten kullanılıyor.');
                return state;
            }
            return {
                ...state,
                employees: [...state.employees, action.payload],
            };
        case 'UPDATE_EMPLOYEE':
            return {
                ...state,
                employees: state.employees.map(emp =>
                    emp.id === action.payload.id ? action.payload : emp
                ),
            };
        case 'DELETE_EMPLOYEE':
            return {
                ...state,
                employees: state.employees.filter(emp => emp.id !== action.payload),
            };
        default:
            return state;
    }
};
