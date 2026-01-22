import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";
import * as React from "react";


interface EmailProps {
    fullName:string,
    email:string,
    message:string
}


export const ContactEmail = ({fullName, email, message}:EmailProps) => (
  <Html>
    <Head />
    <Preview>Nouveau message de {fullName}</Preview>
    <Tailwind>
      <Body className="bg-gray-50 py-10 font-sans">
        <Container className="bg-white border border-gray-200 rounded-lg p-8 mx-auto max-w-[600px]">
          <Heading className="text-2xl font-bold text-gray-800 mb-4">
            📩 Nouveau message reçu
          </Heading>
          
          <Section className="mb-6">
            <Text className="text-sm text-gray-500 uppercase tracking-wide font-semibold mb-1">
              De la part de :
            </Text>
            <Text className="text-lg text-gray-900 font-medium">
              {fullName} ({email})
            </Text>
          </Section>

          <Hr className="border-gray-200 my-6" />

          <Section>
            <Text className="text-sm text-gray-500 uppercase tracking-wide font-semibold mb-1">
              Message :
            </Text>
            <Text className="text-gray-800 leading-relaxed bg-gray-50 p-4 rounded-md italic">
              "{message}"
            </Text>
          </Section>

          <Hr className="border-gray-200 my-6" />

          <Text className="text-xs text-gray-400 text-center">
            Cet email a été envoyé via le formulaire de contact de votre site Togo Travels.
          </Text>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default ContactEmail;