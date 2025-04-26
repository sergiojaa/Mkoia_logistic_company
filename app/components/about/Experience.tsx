'use client'
import { useTranslate } from "@/app/utils/translate"
import ExperienceCards from "./ExperienceCards"
export default function Experience() {
    const t = useTranslate()

    return (
        <div className="grid  lg:p-0 p-7 grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <ExperienceCards year="3" text={t('experience')} />
            <ExperienceCards year="90%" text={t('delivery-rate')} />
            <ExperienceCards year="500+" text={t('client')} />
            <ExperienceCards year="10+" text={t('employee')} />

        </div>
    )
}