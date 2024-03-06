import { PrincipalLayout } from "../../layouts"
import { ProfileForm } from "./ProfileForm"

export const ProfilePage = () => {
  return (
    <div>
      <PrincipalLayout>
        <section className="mt-8">
          <ProfileForm />
        </section>
      </PrincipalLayout>
    </div>
  )
}
