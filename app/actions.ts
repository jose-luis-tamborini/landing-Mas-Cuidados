"use server";

export async function submitContactForm(formData: FormData) {
  const nombre    = formData.get("nombre")    as string;
  const telefono  = formData.get("telefono")  as string;
  const email     = formData.get("email")     as string;
  const localidad = formData.get("localidad") as string;
  const servicio  = formData.get("servicio")  as string;

  // TODO: persist to DB / send email
  console.log("📋 Nueva solicitud de cuidador:", {
    nombre,
    telefono,
    email,
    localidad,
    servicio,
  });
}
