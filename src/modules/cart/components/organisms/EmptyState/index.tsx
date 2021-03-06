import { useRouter } from "next/router"
import Image from "next/image"

import EmptyStateImage from "assets/images/empty-state.png"
import { Button } from "common/components/atoms"

import { motion } from "framer-motion"

const EmptyState = () => {
    const router = useRouter()

    const handleBack = () => {
        router.push("/catalogue")
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full flex flex-1 items-center justify-center flex-col"
        >
            <Image height={200} width={200} alt="Empty" src={EmptyStateImage} />
            <p className="text-2xl text-gray-600">Ooops ! There is nothing</p>
            <p className="text-lg text-gray-500 mt-1">
                Back to the catalogue and choose something !
            </p>

            <div className="w-48 mt-10">
                <Button onClick={handleBack}>Back to Catalogue</Button>
            </div>
        </motion.div>
    )
}

export default EmptyState
