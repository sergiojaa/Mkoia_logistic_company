import ExperienceCards from "./ExperienceCards"
export default function Experience() {
    return (
        <div className="grid  p-5 grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <ExperienceCards year="25" text="Years of Industry Experience" />
            <ExperienceCards year="99%" text="On-Time Delivery Rate" />
            <ExperienceCards year="500+" text="Satisfied Clients Worldwide" />
            <ExperienceCards year="300+" text="Employees for Your Success" />

        </div>
    )
}