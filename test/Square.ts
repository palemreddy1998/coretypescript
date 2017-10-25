import {Shape} from '../lib/interfaces/Shape'
import {log,catProd} from '../lib/Config';

class Square implements Shape{
    drawShape(height: number, width: number, length: number) {
        log.info("Square- drawSquare")
        return height*width*length;
    }

}
export { Square };