import React from 'react'
import { NavigateFunction, useNavigate, useParams } from 'react-router-dom'
import '../../css/ProductPage.css'
import Client, { LOAD } from '../../functions/Client'
import Product from '../../functions/ProductFunctions'
import { ProductType } from '../../interfaces/ProductType'
import LayoutWrap from '../Layout/LayoutWrap'
import MainContent from './MainContent'

const PRODUCT_PAGE = () => {
    const [product, setProduct] = React.useState<ProductType | null>(null),
          {id} = useParams(),
          n: NavigateFunction = useNavigate()


    React.useEffect(() => {
        const load: LOAD.Loading = new Client.Loading()

        load
            .defaultStyleDots({
                position: 'fixed'
            })
            .append(document.body)


        setTimeout(() => {
            try {
                const searchedProduct: ProductType | null = new Product().getOne(id)
    
                if(!searchedProduct) {
                    n('/', { replace: true })
        
                    return
                }
        
                setProduct(searchedProduct)
    
            }finally {
                load.remove()
            }
        }, 500)
    }, [])


    if(product)
    return (
        <LayoutWrap darkNav={true}>

            <main className="product-page">

                <MainContent product={product} />

            </main>

        </LayoutWrap>
    )

    return <></>
}

export default PRODUCT_PAGE