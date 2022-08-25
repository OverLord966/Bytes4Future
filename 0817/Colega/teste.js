function semanaPorExtensoBilingue(data, lingua){
    
    let semana = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"]
    let week = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]

    /*switch(lingua){
        case "pt": return semana[data.getDay()]
        default: return week[data.getDay()]
    }*/

    let d = data.getweek()
    
    if(lingua == "pt"){

        switch(d){
            case 0:
                return semana[d]
            case 1:
                return semana[d]
            case 2:
                return semana[d]
            case 3:
                return semana[d]
            case 4:
                return semana[d]
            case 5:
                return semana[d]
            case 6:
                return semana[d]
            case 7:
                return semana[d]
            case 8:
                return semana[d]
            case 9:
                return semana[d]
            case 10:
                return semana[d]
            case 11:
                return semana[d]
        }

    }else if(lingua == "en"){

        switch(d){
            case 0:
                return week[d]
            case 1:
                return week[d]
            case 2:
                return week[d]
            case 3:
                return week[d]
            case 4:
                return week[d]
            case 5:
                return week[d]
            case 6:
                return week[d]
            case 7:
                return week[d]
            case 8:
                return week[d]
            case 9:
                return week[d]
            case 10:
                return week[d]
            case 11:
                return week[d]
        }

    }
}