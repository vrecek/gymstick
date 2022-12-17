type ID = {
    id: string
}


export default abstract class Options<Card extends ID, Whole extends ID> {
    protected itemArray: Whole[]
    

    protected randomIndex(len: number): number {
        return ~~(Math.random() * len)
    }


    protected shuffleProducts<T>(array: T[]): T[] {
        let currentIndex = array.length,
            randomIndex


        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex--;

            [array[currentIndex], array[randomIndex]] = 
            [array[randomIndex], array[currentIndex]]
        }

        return array
    }


    public constructor(arr: Whole[]) {
        this.itemArray = arr
    }


    public getOne(id?: string): Whole | null {
        if(!id) return null

        const product = this.itemArray.filter(x => x.id === id)?.[0]

        return product ?? null
    }


    public abstract getAll(): Card[]
    public abstract getCard(): Card
}