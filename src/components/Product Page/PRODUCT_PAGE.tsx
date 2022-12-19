import React from 'react'
import { Location, NavigateFunction, useLocation, useNavigate, useParams } from 'react-router-dom'
import '../../css/ProductPage.css'
import Client, { LOAD } from '../../functions/Client'
import Product from '../../functions/ProductFunctions'
import { ProductType } from '../../interfaces/ProductType'
import LayoutWrap from '../Layout/LayoutWrap'
import MainContent from './MainContent'

const PRODUCT_PAGE = () => {
    const [product, setProduct] = React.useState<ProductType | null>(null),
          {id} = useParams(),
          n: NavigateFunction = useNavigate(),
          loc: Location = useLocation()


    React.useEffect(() => {
        window.scrollTo(0, 0)

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
    }, [loc])


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