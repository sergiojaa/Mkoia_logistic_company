import ExperienceCards from "./ExperienceCards"
export default function Experience() {
    return (
        <div className="grid  p-5 grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <ExperienceCards year="3" text="წლიანი ინდუსტრიის" />
            <ExperienceCards year="90%" text="მიწოდების მაჩვენებელი" />
            <ExperienceCards year="500+" text="კმაყოფილი მომხმარებელი" />
            <ExperienceCards year="10+" text="თანამშრომელი" />

        </div>
    )
}